type UserDetailsProps = {
  name: string;
  gender: string;
  dob: string;
};

export default function UserDetails({ name, gender, dob }: UserDetailsProps) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg w-md">
      <p>
        <label>Name:</label> {name}
      </p>
      <p>
        <label>Gender:</label> {gender}
      </p>
      <p>
        <label>Birthday:</label> {dob}
      </p>
    </div>
  );
}
