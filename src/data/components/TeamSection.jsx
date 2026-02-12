import React from 'react';

const teamMembers = [
  {
    name: 'Zaka Ullah',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Leads strategy and innovation at AccessoriesShop.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Creative Director',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Designs products that our customers love.',
  },
  {
    name: 'Ali Raza',
    role: 'Marketing Head',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    bio: 'Drives our brand presence across all platforms.',
  },
  {
    name: 'Sana Malik',
    role: 'Customer Experience Manager',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    bio: 'Ensures every customer gets premium service.',
  },
];

const TeamSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-yellow-600">{member.role}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
