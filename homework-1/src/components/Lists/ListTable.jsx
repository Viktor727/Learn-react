export default function ListTable(props){
  return (
    <>
      <li>
        <span className="font-semibold">{props.title}: </span>
        {props.text}
      </li>
    </>
  );
}