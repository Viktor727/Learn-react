import React from "react";

import ListTable from "../Lists/ListTable";

const CARS = [
    {
        id: 1,
        brand: "Audi",
        models: [
            {
                id: 1,
                name: "A1",
                collection: [
                    {
                        id: 1,
                        version: "Sportback",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    },
                    {
                        id: 2,
                        version: "Citycarver",
                        year: 2019,
                        horsepower: 95,
                        engine: 999
                    }
                ]
            },
            {
                id: 2,
                name: "Q5",
                collection: [
                    {
                        id: 1,
                        version: "FY 2021",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Sportback",
                        year: 2021,
                        horsepower: 299,
                        engine: 1984
                    }
                ]
            },
            {
                id: 3,
                name: "TT",
                collection: [
                    {
                        id: 1,
                        version: "Coupe",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    },
                    {
                        id: 2,
                        version: "Roadster",
                        year: 2021,
                        horsepower: 197,
                        engine: 1984
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        brand: "BMW",
        models: [
            {
                id: 1,
                name: "8 series",
                collection: [
                    {
                        id: 1,
                        version: "G1X LCI",
                        year: 2022,
                        horsepower: 333,
                        engine: 2998
                    },
                    {
                        id: 2,
                        version: "G1X",
                        year: 2019,
                        horsepower: 340,
                        engine: 2998
                    }
                ]
            },
            {
                id: 2,
                name: "X6",
                collection: [
                    {
                        id: 1,
                        version: "G06 LCI",
                        year: 2023,
                        horsepower: 530,
                        engine: 4395
                    },
                    {
                        id: 2,
                        version: "G06",
                        year: 2020,
                        horsepower: 286,
                        engine: 2993
                    }
                ]
            }
        ]
    },
];

export default function TablePrimary(props){
  return (
    <div
      className="px-4 sm:px-6 lg:px-8 mx-auto my-10"
      style={{ maxWidth: "1200px" }}
    >
      <h1 className="title">Card Specs</h1>
      <div className="mt-4">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="table">
              <tbody>
                {CARS.map((car, indexFirst) => (
                  <React.Fragment key={indexFirst}>
                    <tr className="table__brand">
                      <td colSpan="2">{car.brand}</td>
                    </tr>
                    {car.models.map((models, indexSecond) => (
                      <React.Fragment key={indexSecond}>
                        <tr>
                          <td rowSpan="2" className="table-cell__model">
                            {models.name}
                          </td>
                          <td>
                            <ul>
                              <ListTable
                                title={"Version"}
                                text={models.collection[0].version}
                              ></ListTable>
                              <ListTable
                                title={"Year"}
                                text={models.collection[0].year}
                              ></ListTable>
                              <ListTable
                                title={"Horsepower"}
                                text={models.collection[0].horsepower}
                              ></ListTable>
                              <ListTable
                                title={"Engine"}
                                text={models.collection[0].engine}
                              ></ListTable>
                            </ul>
                          </td>
                        </tr>
                        <tr className="border-b-imp">
                          <td>
                            <ul>
                              <ListTable
                                title={"Version"}
                                text={models.collection[1].version}
                              ></ListTable>
                              <ListTable
                                title={"Year"}
                                text={models.collection[1].year}
                              ></ListTable>
                              <ListTable
                                title={"Horsepower"}
                                text={models.collection[1].horsepower}
                              ></ListTable>
                              <ListTable
                                title={"Engine"}
                                text={models.collection[1].engine}
                              ></ListTable>
                            </ul>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

}


  
   
  