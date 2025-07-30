const ProfilePage = () => {
    // Placeholder user data
    const user = {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      avatarUrl: 'https://via.placeholder.com/150',
      bio: 'Lifelong learner and full-stack developer. Passionate about creating intuitive and powerful web applications.',
      joinDate: '2023-01-15',
    };
  
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center space-x-6">
          <img className="w-24 h-24 rounded-full" src={user.avatarUrl} alt="User Avatar" />
          <div>
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold border-b pb-2 mb-4">About Me</h3>
          <p className="text-gray-700">{user.bio}</p>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">Member since: {new Date(user.joinDate).toLocaleDateString()}</p>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;