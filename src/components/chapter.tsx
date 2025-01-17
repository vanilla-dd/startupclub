import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Chapter = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const parseCSV = (csvText) => {
      const lines = csvText.split("\n");
      const headers = lines[0]
        .split(",")
        .map((header) => header.replace(/['"]+/g, "").trim());

      return lines
        .slice(1)
        .map((line) => {
          const values = line
            .split(",")
            .map((value) => value.replace(/['"]+/g, "").trim());
          const row = {};
          headers.forEach((header, index) => {
            row[header] = values[index];
          });
          return row;
        })
        .filter((row) => Object.values(row).some((value) => value));
    };

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/1mAVWKuoNguW7-qA-4aqDMdPron38gpncNPsc_oySjYg/export?format=csv&id=1mAVWKuoNguW7-qA-4aqDMdPron38gpncNPsc_oySjYg&gid=0"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setChapters(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load chapters");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto space-y-8 px-2 sm:space-y-10 md:space-y-12 lg:space-y-16">
      <p className="text-center font-ChangaOne text-3xl font-medium text-black sm:text-4xl md:text-5xl lg:text-6xl">
        Check What we{" "}
        <span className="px-px text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          Cooking
        </span>
      </p>

      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="w-full">
              <CardContent className="p-6">
                <div className="animate-pulse space-y-4">
                  <div className="h-8 w-3/4 rounded bg-gray-200"></div>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-full bg-gray-200"></div>
                    <div className="space-y-2">
                      <div className="h-4 w-32 rounded bg-gray-200"></div>
                      <div className="h-4 w-24 rounded bg-gray-200"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-gray-200"></div>
                    <div className="h-4 w-full rounded bg-gray-200"></div>
                    <div className="h-4 w-full rounded bg-gray-200"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : error ? (
        <Card className="mx-auto w-full max-w-2xl">
          <CardContent className="p-6">
            <div className="text-red-500">{error}</div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle>{chapter["Chapter Name"]}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={chapter["Avatar"]}
                      alt="Chapter Avatar"
                      className="h-16 w-16 rounded-full"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${chapter["Admin Name"]}`;
                        e.target.alt = "Placeholder Avatar";
                      }}
                    />
                    <div>
                      <p className="font-medium">
                        Admin: {chapter["Admin Name"]}
                      </p>
                      <a
                        href={chapter["Admin LinkedIn"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p>
                      <strong>Chapter Strength:</strong>{" "}
                      {chapter["Chapter Strength"]}
                    </p>
                    <p>
                      <strong>WhatsApp:</strong>{" "}
                      <a
                        href={chapter["WhatsApp"]}
                        className="text-blue-600 hover:underline"
                      >
                        Join Group
                      </a>
                    </p>
                    <p>
                      <strong>Events:</strong>{" "}
                      <a
                        href={chapter["Events"]}
                        className="text-blue-600 hover:underline"
                      >
                        View Events
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chapter;
