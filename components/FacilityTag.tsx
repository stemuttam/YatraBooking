// components/FacilityTag.tsx
type Props = { label: string };

const FacilityTag = ({ label }: Props) => {
  const icons: { [key: string]: string } = {
    'AC': '❄️',
    'Parking': '🚗',
    'WiFi': '📶',
    'Free WiFi': '📶',
    'Breakfast': '🍳',
    'Pet Friendly': '🐶',
    'Gym': '🏋️',
    'Room Service': '🛎️',
  };

  return (
    <span className="inline-flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2">
      <span>{icons[label] || '•'}</span>
      <span>{label}</span>
    </span>
  );
};

export default FacilityTag;
