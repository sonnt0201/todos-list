import "./TodoTable.css";

export function TodoTable() {
  return (
    <>
      <table>
        <tr>
          <th className = 'id-column'>ID </th>
          <th>TASK</th>
          <th>TIME</th>
        </tr>
        <tr>
          <td className = 'id-column'>Alfreds</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td className = 'id-column'>Centro</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td className = 'id-column'>Ernst</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td className = 'id-column'>Island </td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td className = 'id-column'>Laughing </td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td className = 'id-column'>Magazzini</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </>
  );
}


function TodoTableObserver() {

}