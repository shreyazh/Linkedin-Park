import { UserPlus, Users, Rocket, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Join a Park',
    description: 'Choose a themed park that matches your professional interests and expertise.',
    color: 'bg-blue-500'
  },
  {
    icon: Users,
    title: 'Find Your Team',
    description: 'Connect with like-minded professionals and form collaborative project teams.',
    color: 'bg-green-500'
  },
  {
    icon: Rocket,
    title: 'Build Together',
    description: 'Work on timed challenges, hackathons, and design sprints with your new network.',
    color: 'bg-purple-500'
  },
  {
    icon: Trophy,
    title: 'Showcase Success',
    description: 'Display your collaborative achievements on your LinkedIn profile and build lasting connections.',
    color: 'bg-orange-500'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How LinkedIn Park Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform networking from awkward small talk into meaningful collaboration through shared project experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5">
                      <div className="absolute right-0 top-0 w-3 h-3 bg-gray-300 rounded-full -translate-y-1.5 translate-x-1.5"></div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
}