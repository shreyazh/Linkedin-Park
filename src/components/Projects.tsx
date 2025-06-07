import { ExternalLink, Heart, MessageCircle, Share2, Award } from 'lucide-react';

const projects = [
  {
    title: 'EcoTrack - Carbon Footprint Calculator',
    description: 'A mobile app helping users track and reduce their environmental impact through gamified challenges.',
    team: ['Sarah Chen', 'Mike Rodriguez', 'Priya Patel', 'James Wilson'],
    park: 'Tech Park',
    duration: '48 hours',
    status: 'Completed',
    likes: 234,
    comments: 18,
    shares: 12,
    image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['React Native', 'Sustainability', 'Gamification'],
    achievement: 'Winner - Best Social Impact'
  },
  {
    title: 'MentorMatch AI Platform',
    description: 'AI-powered platform connecting junior developers with senior mentors based on skills and career goals.',
    team: ['Alex Thompson', 'Maria Garcia', 'David Kim'],
    park: 'Innovation Park',
    duration: '72 hours',
    status: 'In Progress',
    likes: 189,
    comments: 24,
    shares: 8,
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['AI/ML', 'Mentorship', 'Career Development']
  },
  {
    title: 'Local Business Recovery Hub',
    description: 'Digital marketplace and resource center helping small businesses navigate economic challenges.',
    team: ['Rachel Adams', 'Tom Brown', 'Lisa Zhang', 'Carlos Mendez', 'Emma Taylor'],
    park: 'Business Park',
    duration: '5 days',
    status: 'Completed',
    likes: 312,
    comments: 31,
    shares: 19,
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['E-commerce', 'Community', 'SMB Support'],
    achievement: 'Featured Project'
  },
  {
    title: 'Accessible Design System',
    description: 'Comprehensive UI component library prioritizing accessibility and inclusive design principles.',
    team: ['Jordan Lee', 'Sam Patel', 'Maya Johnson'],
    park: 'Creative Park',
    duration: '1 week',
    status: 'In Progress',
    likes: 156,
    comments: 14,
    shares: 22,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    tags: ['Design System', 'Accessibility', 'React']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Collaboration Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing projects created through cross-functional collaboration in our themed parks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.park}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                {project.achievement && (
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {project.achievement}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Collaboration Team:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.team.map((member, memberIndex) => (
                      <span
                        key={memberIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{project.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{project.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="text-sm">{project.shares}</span>
                    </button>
                  </div>
                  <div className="text-sm text-gray-500">
                    {project.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}