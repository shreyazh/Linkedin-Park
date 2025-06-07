import { Code, Palette, Briefcase, Lightbulb, Camera, Music, ArrowRight } from 'lucide-react';

const parks = [
  {
    name: 'Tech Park',
    icon: Code,
    description: 'Join developers for hackathons, coding challenges, and innovation sprints.',
    participants: '12.5k',
    activeProjects: 45,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Creative Park',
    icon: Palette,
    description: 'Collaborate with designers on brand projects, UI/UX challenges, and visual campaigns.',
    participants: '8.7k',
    activeProjects: 32,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50'
  },
  {
    name: 'Business Park',
    icon: Briefcase,
    description: 'Network with entrepreneurs and business leaders on strategy and growth projects.',
    participants: '15.2k',
    activeProjects: 28,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Innovation Park',
    icon: Lightbulb,
    description: 'Explore cutting-edge ideas with researchers, inventors, and thought leaders.',
    participants: '6.1k',
    activeProjects: 19,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50'
  },
  {
    name: 'Media Park',
    icon: Camera,
    description: 'Create compelling content with journalists, marketers, and media professionals.',
    participants: '9.3k',
    activeProjects: 24,
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50'
  },
  {
    name: 'Arts Park',
    icon: Music,
    description: 'Express creativity with artists, musicians, and cultural creators.',
    participants: '4.8k',
    activeProjects: 16,
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-50'
  }
];

export default function Parks() {
  return (
    <section id="parks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Professional Playground
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each park is a themed collaboration space where professionals with similar interests work together on exciting projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parks.map((park) => {
            const IconComponent = park.icon;
            return (
              <div
                key={park.name}
                className={`${park.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${park.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{park.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{park.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{park.participants}</p>
                    <p className="text-sm text-gray-600">Active Members</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{park.activeProjects}</p>
                    <p className="text-sm text-gray-600">Live Projects</p>
                  </div>
                </div>
                
                <button className="w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white">
                  Enter Park
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}