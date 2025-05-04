const AssignedClasses = ({ assignedClasses }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 text-black">
      <h3 className="text-lg font-semibold mb-2">Assigned Classes</h3>
      {assignedClasses?.length > 0 ? (
        <ul className="list-disc ml-5">
          {assignedClasses.map((cls, index) => (
            <li key={index}>
              Year: {cls.academic_year}, Branch: {cls.branch}, Class ID: {cls.class_id}
            </li>
          ))}
        </ul>
      ) : (
        <p>No assigned classes found.</p>
      )}
    </div>
  );
};

export default AssignedClasses;
