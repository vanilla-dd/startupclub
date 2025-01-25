import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Link as LinkIcon } from "lucide-react";

interface EventData {
  "Event Name": string;
  "Poster image URL": string;
  Date: string;
  "Start Time": string;
  "End Time": string;
  "Venue name": string;
  "Map Link": string;
  "Registration Link": string;
}

const Event = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const parseCSV = (csvText: string): EventData[] => {
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
          const row: Partial<EventData> = {};
          headers.forEach((header, index) => {
            row[header as keyof EventData] = values[index];
          });
          return row as EventData;
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
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load events. Please try again later.");
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
          Upcoming Events
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Join us for exciting events and connect with our community.
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
                  <div className="h-48 w-full rounded-lg bg-gray-200"></div>
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

      {/* Events Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card
              key={index}
              className="w-full transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {event["Event Name"]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Event Poster */}
                  {event["Poster image URL"] && (
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <img
                        src={event["Poster image URL"]}
                        alt={event["Event Name"]}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.alt = "Event placeholder";
                        }}
                      />
                    </div>
                  )}

                  {/* Event Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-gray-700" />
                      <span className="text-gray-700">{event["Date"]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-gray-700" />
                      <span className="text-gray-700">
                        {event["Start Time"]} - {event["End Time"]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-gray-700" />
                      <span className="text-gray-700">
                        {event["Venue name"]}
                      </span>
                    </div>
                  </div>

                  {/* Event Links */}
                  <div className="space-y-2">
                    {event["Map Link"] && (
                      <a
                        href={event["Map Link"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <LinkIcon className="h-5 w-5" />
                        <span>View Location</span>
                      </a>
                    )}

                    {event["Registration Link"] && (
                      <a
                        href={event["Registration Link"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-white transition-colors hover:bg-blue-700"
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
      )}
    </div>
  );
};

export default Event;
