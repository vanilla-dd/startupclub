import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Link as LinkIcon } from "lucide-react";

const Event = () => {
  const [events, setEvents] = useState([]);
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
          "https://docs.google.com/spreadsheets/d/1mAVWKuoNguW7-qA-4aqDMdPron38gpncNPsc_oySjYg/export?format=csv&id=1mAVWKuoNguW7-qA-4aqDMdPron38gpncNPsc_oySjYg&gid=1352405302&gid=1352405302"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setEvents(parsedData);
        console.log(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-4">
        <Card className="mx-auto mb-4 w-full max-w-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-center">
              <div className="text-gray-600">Loading events...</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <Card className="mx-auto mb-4 w-full max-w-2xl">
          <CardContent className="p-6">
            <div className="text-red-500">{error}</div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <p className="text-center font-ChangaOne text-3xl font-medium text-black sm:text-4xl md:text-5xl lg:text-6xl">
        Come{" "}
        <span className="px-px text-transparent underline decoration-dashed underline-offset-4 [-webkit-text-stroke-color:black] [-webkit-text-stroke-width:1px]">
          Join
        </span>{" "}
        Us
      </p>
      {events.map((event, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle className="text-xl">{event["Event Name"]}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Event Image */}
              {event["Poster image URL"] && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <img
                    src={event["Poster image URL"]}
                    alt={event["Event Name"]}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/400/200";
                      e.target.alt = "Event placeholder";
                    }}
                  />
                </div>
              )}

              {/* Date and Time */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event["Date"]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>
                    {event["Start Time"]} - {event["End Time"]}
                  </span>
                </div>
              </div>

              {/* Venue and Links */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{event["Venue name"]}</span>
                </div>

                {event["Map Link"] && (
                  <a
                    href={event["Map Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <LinkIcon className="h-4 w-4" />
                    <span>View Location</span>
                  </a>
                )}

                {event["Registration Link"] && (
                  <a
                    href={event["Registration Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                  >
                    Register Now
                  </a>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Event;
