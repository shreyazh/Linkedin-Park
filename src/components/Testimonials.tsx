import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Shailaja',
    role: 'Senior Product Designer',
    company: 'TechFlow Inc.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    testimonial: 'LinkedIn Park transformed how I network. Instead of awkward small talk, I built real relationships through collaborative projects. I found my current business partner in Tech Park!',
    rating: 5,
    project: 'EcoTrack Mobile App'
  },
  {
    name: 'Praveen',
    role: 'Full Stack Developer',
    company: 'StartupLab',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    testimonial: 'The collaborative sprints pushed me out of my comfort zone and connected me with amazing professionals. My LinkedIn connections increased by 300% in just 3 months.',
    rating: 5,
    project: 'AI Mentorship Platform'
  },
  {
    name: 'Sanjeev',
    role: 'Innovation Director',
    company: 'HealthTech Solutions',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    testimonial: 'Innovation Park is where breakthrough ideas come to life. The diverse perspectives and collaborative environment lead to solutions I never could have imagined alone.',
    rating: 5,
    project: 'Healthcare Data Analytics'
  },
  {
    name: 'Anubhav',
    role: 'Creative Director',
    company: 'BrandStory Agency',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    testimonial: 'Creative Park brought together talents from different industries. The cross-pollination of ideas resulted in award-winning campaigns and lifelong professional relationships.',
    rating: 5,
    project: 'Social Impact Campaign'
  }
];

export default function Testimonials() {
  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who transformed their careers through collaborative networking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="h-8 w-8 text-blue-400 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">
                  Project: {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of professionals who are building meaningful connections through collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Start Networking Today
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}