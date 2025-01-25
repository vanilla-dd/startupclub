import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ChapterData {
  "Chapter Name": string;
  Avatar: string;
  "Admin Name": string;
  "Admin LinkedIn": string;
  "Chapter Strength": string;
  WhatsApp: string;
  Events: string;
}

const Chapter = () => {
  const [chapters, setChapters] = useState<ChapterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const parseCSV = (csvText: string): ChapterData[] => {
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
          const row: Partial<ChapterData> = {};
          headers.forEach((header, index) => {
            row[header as keyof ChapterData] = values[index];
          });
          return row as ChapterData;
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
        setError("Failed to load chapters. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
          Our Chapters
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our vibrant community chapters and join the movement.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      )}

      {/* Error State */}
      {error && (
        <div className="text-center">
          <p className="mb-4 text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Chapters Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter, index) => (
            <Card
              key={index}
              className="w-full transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {chapter["Chapter Name"]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Admin Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={chapter["Avatar"]}
                      alt="Chapter Avatar"
                      className="h-16 w-16 rounded-full"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${chapter["Admin Name"]}`;
                        e.currentTarget.alt = "Placeholder Avatar";
                      }}
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {chapter["Admin Name"]}
                      </p>
                      <a
                        href={chapter["Admin LinkedIn"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Chapter Details */}
                  <div className="space-y-2">
                    <p className="text-gray-700">
                      <strong>Strength:</strong> {chapter["Chapter Strength"]}
                    </p>
                    <p className="text-gray-700">
                      <strong>WhatsApp:</strong>{" "}
                      <a
                        href={chapter["WhatsApp"]}
                        className="text-blue-600 hover:underline"
                      >
                        Join Group
                      </a>
                    </p>
                    <p className="text-gray-700">
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
