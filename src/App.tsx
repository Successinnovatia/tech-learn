import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Target, 
  Zap, 
  CheckCircle, 
  Star,
  Award,
  TrendingUp,
  UserCheck,
  Clock,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Code,
  Database,
  Smartphone,
  BarChart3,
  Palette,
  Cloud
} from 'lucide-react';

function App() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    track: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setShowJoinModal(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      track: '',
      motivation: ''
    });
  };

  const techTracks = [
    {
      id: 'product-management',
      icon: Target,
      title: 'Product Management',
      description: 'Master product strategy, user research, and stakeholder management',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      color: 'blue'
    },
    {
      id: 'software-development',
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development with modern frameworks and technologies',
      duration: '20 weeks',
      level: 'Beginner to Advanced',
      color: 'green'
    },
    {
      id: 'data-science',
      icon: BarChart3,
      title: 'Data Science & Analytics',
      description: 'Python, machine learning, and data visualization',
      duration: '18 weeks',
      level: 'Intermediate to Advanced',
      color: 'purple'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android app development with React Native',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      color: 'orange'
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User experience design, prototyping, and design systems',
      duration: '14 weeks',
      level: 'Beginner to Advanced',
      color: 'pink'
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, Kubernetes, and CI/CD pipelines',
      duration: '16 weeks',
      level: 'Intermediate to Advanced',
      color: 'indigo'
    }
  ];

  const enrolledStudents = ["https://img.freepik.com/free-photo/african-teenage-girl-portrait-happy-smiling-face_53876-146757.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740", "https://img.freepik.com/free-photo/business-man-banner-concept-with-copy-space_23-2149601460.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740", "https://img.freepik.com/free-photo/close-up-smiley-woman-library_23-2149204737.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740", "https://img.freepik.com/premium-photo/smiling-african-american-man_33839-2302.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740"]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      pink: 'bg-pink-100 text-pink-600 border-pink-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TechLearn</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tracks" className="text-gray-600 hover:text-gray-900 transition-colors">Tech Tracks</a>
              <a href="#outcome" className="text-gray-600 hover:text-gray-900 transition-colors">Why Choose Us</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
              <a href="#success" className="text-gray-600 hover:text-gray-900 transition-colors">Success Stories</a>
              <button 
                onClick={() => setShowJoinModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4 mr-1" />
                  Launch Your Tech Career
                </div>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Master In-Demand 
                  <span className="text-blue-600"> Tech Skills</span> from Zero to Hero
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Transform your career with our comprehensive tech education programs. 
                  Learn Product Management, Software Development, Data Science, and more from industry experts.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowJoinModal(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Join a cohort
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {enrolledStudents.map((url, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white">
                        <img src={url} alt="enrolled students" className='h-full w-full rounded-full'/>
                      </div>
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-600">5,000+ students enrolled</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Popular Tech Tracks</h3>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">6 Tracks Available</span>
                  </div>
                  
                  {['Product Management', 'Software Development', 'Data Science', 'Mobile Development', 'UI/UX Design'].map((track, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium text-gray-900">{track}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Tracks Section */}
      <section id="tracks" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Tech Track</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed by industry experts to take you from beginner to job-ready professional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {techTracks.map((track) => (
              <div key={track.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${getColorClasses(track.color)}`}>
                    <track.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{track.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {track.duration}
                      </span>
                      <span>{track.level}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{track.description}</p>
                <button 
                  onClick={() => {
                    setFormData({...formData, track: track.title});
                    setShowJoinModal(true);
                  }}
                  className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section id="outcome" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TechLearn?</h2>
            <p className="text-xl text-gray-600">Everything you need to excel in the tech industry</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: Award,
                  title: "Industry-Recognized Certifications",
                  description: "Get certified in multiple tech disciplines and showcase your skills to top employers worldwide"
                },
                {
                  icon: Users,
                  title: "Expert Mentorship",
                  description: "Work directly with experienced professionals from Google, Amazon, Meta, and leading African tech companies"
                },
                {
                  icon: Globe,
                  title: "Real-World Projects",
                  description: "Build actual products, apps, and solutions that demonstrate your technical capabilities across different domains"
                },
                {
                  icon: TrendingUp,
                  title: "Comprehensive Career Support",
                  description: "Resume reviews, interview prep, portfolio building, and job placement assistance across all tech roles"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Join Our Tech Community</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Active Students</span>
                    <span className="font-semibold">5,000+</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Job Placement Rate</span>
                    <span className="font-semibold">89%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '89%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Average Salary Increase</span>
                    <span className="font-semibold">$42K</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tech Tracks Available</span>
                    <span className="font-semibold">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About TechLearn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to democratize tech education and bridge the technology skill gap in Nigeria and Africa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                TechLearn was founded in 2022 by Kingsley Nwosu as a not-for-profit organisation who saw a gap in accessible, 
                practical tech education and essentially bridging the technology skill gap in Nigeria and Africa. Having worked at 
                leading technology companies, and successful startups, he understood the challenges of breaking into the 
                tech industry as a whole and excelling in various technical roles.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                He created TechLearn to bridge the gap between academic theory and real-world practice, providing aspiring and 
                current tech professionals with the skills, knowledge, and network they need to succeed in today's competitive landscape 
                across multiple technology disciplines.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">2022</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5,000+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">89%</div>
                  <div className="text-sm text-gray-600">Job Placement Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img 
                  src="./images/tech-ceo-big.jpg" 
                  alt="Team collaboration" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <blockquote className="text-gray-600 italic text-lg">
                  "Our goal is to make world-class tech education accessible to everyone in Africa, 
                  regardless of their background, location, or chosen tech specialization."
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">Kingsley Nwosu</div>
                  <div className="text-sm text-gray-600">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Student-First Approach",
                  description: "Every decision we make is centered around what's best for our students' learning and career success across all tech disciplines."
                },
                {
                  icon: Lightbulb,
                  title: "Practical Learning",
                  description: "We focus on real-world skills and hands-on experience that directly translates to job performance in the tech industry."
                },
                {
                  icon: Shield,
                  title: "Quality & Excellence",
                  description: "We maintain the highest standards in curriculum design, instructor expertise, and student support across all our tech tracks."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Expert Team</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Kingsley Nwosu",
                  role: "Founder & CEO",
                  image: "./images/tech-ceo.jpg",
                  background: "Tech Industry Veteran"
                },
                {
                  name: "Michael  Essien",
                  role: "Head of Engineering", 
                  image: "https://img.freepik.com/free-photo/i-know-exactly-what-i-want-headshot-attractive-young-african-american-student-stylish-glasses-having-serious-calm-face-expression-feeling-confident-about-his-future-plans-career_273609-179.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
                  background: "Ex-Senior Engineer at Google"
                },
                {
                  name: "Stella Okoro",
                  role: "Head of Data Science",
                  image: "https://img.freepik.com/free-photo/confident-young-businesswoman-looking-camera_74855-4126.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740", 
                  background: "Former ML Director at Amazon"
                },
                {
                  name: " Stella Damascus",
                  role: "Head of Product & Design",
                  image: "https://img.freepik.com/premium-photo/front-view-teacher-looking-camera_13339-127743.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
                  background: "Ex-Principal Designer at Microsoft"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.background}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our students transformed their careers across different tech disciplines</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Olumide",
                role: "Senior Software Engineer at Meta",
                image: "https://img.freepik.com/free-photo/portrait-happy-stylish-african-american-woman_1262-3263.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
                quote: "TechLearn's software development track gave me the confidence and skills to transition from marketing to engineering. The hands-on projects were invaluable.",
                increase: "$65K salary increase",
                track: "Software Development"
              },
              {
                name: "Michael Bosah", 
                role: "Data Scientist at Stripe",
                image: "https://img.freepik.com/premium-photo/vertical-portrait-teen-african-american-male-high-school-student-looking-camera-back-school_411082-874.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740",
                quote: "The data science program helped me build a portfolio with real ML projects. I got multiple job offers after completing the program.",
                increase: "3 job offers received",
                track: "Data Science"
              },
              {
                name: "Hannah Mbeku",
                role: "Senior Product Manager at Paystack",
                image: "https://img.freepik.com/premium-photo/african-teenager-glasses-portrait-studio-education-learning-knowledge-green-background-face-happy-creative-smart-child-boy-student-with-vision-school-studio_590464-321892.jpg?uid=R193310056&ga=GA1.1.1570111543.1742967309&semt=ais_items_boosted&w=740", 
                quote: "From customer service to Senior PM in 18 months. The product management framework I learned here was game-changing for my career.",
                increase: "Promoted to Senior level",
                track: "Product Management"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.role}</p>
                    <p className="text-xs text-blue-600 font-medium">{story.track} Graduate</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-4 italic">"{story.quote}"</blockquote>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {story.increase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of successful tech professionals who started their journey with TechLearn. 
            Your dream career in Product Management, Software Development, Data Science, or any tech field is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowJoinModal(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Join a cohort
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">TechLearn</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering the next generation of tech professionals with world-class education and mentorship across multiple disciplines.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tech Tracks</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Product Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2025 TechLearn. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Join Us Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Join TechLearn</h2>
                <button 
                  onClick={() => setShowJoinModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <p className="text-gray-600 mb-8">
                Take the first step towards your tech career. Choose your track and fill out the form below - we'll get in touch with you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Tech Track *
                  </label>
                  <select
                    id="track"
                    name="track"
                    required
                    value={formData.track}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your preferred tech track</option>
                    <option value="Product Management">Product Management</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Data Science & Analytics">Data Science & Analytics</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Not Sure">Not Sure - Help Me Choose</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your experience level</option>
                    <option value="complete-beginner">Complete Beginner</option>
                    <option value="some-experience">Some Experience (1-2 years)</option>
                    <option value="intermediate">Intermediate (3-5 years)</option>
                    <option value="experienced">Experienced (5+ years)</option>
                    <option value="career-change">Career Change</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    What motivates you to learn tech skills? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your goals and what you hope to achieve in tech..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowJoinModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;