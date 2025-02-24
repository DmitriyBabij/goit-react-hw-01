import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="flex items-center p-2 border rounded-lg shadow-sm">
      <span
        className={`w-3 h-3 rounded-full mr-2 ${
          isOnline ? "bg-green-500" : "bg-red-500"
        }`}
      ></span>
      <img className="w-12 h-12 rounded-full" src={avatar} alt={name} />
      <p className="ml-3 font-medium text-gray-700">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;