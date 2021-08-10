import MaterialTable from "material-table";

export default function TextResourcesTable({ allElements }) {
  const editableData = allElements.map((item) => ({
    //Shallow object copy
    ...item,
  }));

  const tableColumnConfig = [
    {
      title: "Value",
      field: "value",
    },
    {
      title: "Metadata",
      field: "",
    },
    {
      title: "Edit",
      field: "",
    },
    {
      title: "Delete",
      field: "",
    },
  ];

  return (
    <div>
      <MaterialTable
        columns={tableColumnConfig}
        data={editableData}
        options={{
          toolbar: true,
        }}
      />
    </div>
  );
}
