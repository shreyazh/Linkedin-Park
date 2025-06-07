import { Calendar, MapPin, Users, Clock, Video, Coffee } from 'lucide-react';

const events = [
  {
    title: 'AI Innovation Sprint',
    type: 'Hybrid',
    date: 'Dec 15, 2024',
    time: '2:00 PM EST',
    location: 'Tech Park',
    participants: 156,
    maxParticipants: 200,
    description: '48-hour intensive sprint to build AI-powered solutions for real-world problems.',
    tags: ['AI', 'Machine Learning', 'Innovation'],
    isVirtual: true,
    isInPerson: true
  },
  {
    title: 'UX Design Challenge',
    type: 'Virtual',
    date: 'Dec 18, 2024',
    time: '10:00 AM PST',
    location: 'Creative Park',
    participants: 89,
    maxParticipants: 150,
    description: 'Redesign mobile experiences for accessibility and inclusivity.',
    tags: ['UX Design', 'Accessibility', 'Mobile'],
    isVirtual: true,
    isInPerson: false
  },
  {
    title: 'Startup Pitch Workshop',
    type: 'In-Person',
    date: 'Dec 20, 2024',
    time: '6:00 PM EST',
    location: 'Business Park',
    participants: 45,
    maxParticipants: 60,
    description: 'Perfect your pitch with feedback from successful entrepreneurs and investors.',
    tags: ['Entrepreneurship', 'Pitching', 'Startups'],
    isVirtual: false,
    isInPerson: true
  },
  {
    title: 'Creative Content Jam',
    type: 'Hybrid',
    date: 'Dec 22, 2024',
    time: '1:00 PM EST',
    location: 'Media Park',
    participants: 72,
    maxParticipants: 100,
    description: 'Collaborate on viral content campaigns for social good initiatives.',
    tags: ['Content Creation', 'Social Impact', 'Marketing'],
    isVirtual: true,
    isInPerson: true
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Networking Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join professionals from around the world in collaborative challenges designed to build meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {event.isVirtual && (
                      <div className="bg-blue-100 text-blue-800 p-2 rounded-lg">
                        <Video className="h-4 w-4" />
                      </div>
                    )}
                    {event.isInPerson && (
                      <div className="bg-green-100 text-green-800 p-2 rounded-lg">
                        <Coffee className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants}/{event.maxParticipants} joined
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Registration Progress</span>
                    <span>{Math.round((event.participants / event.maxParticipants) * 100)}% full</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                      style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
}