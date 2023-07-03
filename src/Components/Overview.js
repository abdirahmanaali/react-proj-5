import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>"{currentDisplay.name.common}"</h2>

      <table className="overview-table">
        <tbody>
          <tr>
            <td>Borders: </td>
            <td>
              {currentDisplay.borders
                ? currentDisplay.borders.map((e, i) => (
                    <React.Fragment key={i}>
                      {i !== 0 && ", "}
                      {e}
                    </React.Fragment>
                  ))
                : "N/A"}
            </td>
          </tr>
          <tr>
            <td>Capitol: </td>
            {currentDisplay.capital.map((e, i) => (
              <td key={i}>{e}</td>
            ))}
          </tr>
          <tr>
            <td>Population: </td>
            <td>{currentDisplay.population}</td>
          </tr>
          <tr>
            <td>Continents: </td>
            {currentDisplay.continents.map((e, i) => (
              <td key={i}>{e}</td>
            ))}
          </tr>
          <tr>
            <td>Independent: </td>
            <td>{currentDisplay.independent ? "true" : "false"}</td>
          </tr>
          <tr>
            <td>Landlocked: </td>
            <td>{currentDisplay.landlocked ? "true" : "false"}</td>
          </tr>
          <tr>
            <td>Member of UN: </td>
            <td>{currentDisplay.unMember ? "true" : "false"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Overview;