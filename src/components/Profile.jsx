const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-4 text-center">
      <div>
        <img
          src={image}
          alt="User avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
        />
        <p className="text-xl font-semibold text-gray-800">{name}</p>
        <p className="text-gray-500">@{tag}</p>
        <p className="text-gray-500">{location}</p>
      </div>
      <ul className="mt-4">
        <li>
          <span className="text-gray-700 font-medium">Followers:</span> {stats.followers}
        </li>
        <li>
          <span className="text-gray-700 font-medium">Views:</span> {stats.views}
        </li>
        <li>
          <span className="text-gray-700 font-medium">Likes:</span> {stats.likes}
        </li>
      </ul>
    </div>
  );
};

export default Profile;