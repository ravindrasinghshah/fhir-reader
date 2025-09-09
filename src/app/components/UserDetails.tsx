type UserDetailsProps = {
  name: string;
  gender: string;
  dob: string;
};

export default function UserDetails({ name, gender, dob }: UserDetailsProps) {
  return (
    <div className="flex justify-between w-auto">
      <div>
        <label>Name:</label> {name}
      </div>
      <div>
        <label>Gender:</label> {gender}
      </div>
      <div>
        <label>Birthday:</label> {dob}
      </div>
    </div>
  );
}
