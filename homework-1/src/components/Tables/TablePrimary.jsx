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

  /* {people.map((person) => (
      <tr key={person.email}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
          {person.name}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit<span className="sr-only">, {person.name}</span>
          </a>
        </td>
      </tr>
    ))} */

  // <table>
  //   <tbody>
  //     <tr class="row__brand">
  //       <td colspan="2">Audi</td>
  //     </tr>
  //     <tr>
  //       <td rowspan="2" class="cell__model">A1</td>
  //       <td>
  //         <ul>
  //           <li>Version: Sportback</li>
  //           <li>Year: 2019</li>
  //           <li>Horsepower: 95</li>
  //           <li>Engine: 999</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td>
  //         <ul>
  //           <li>Version: Citycarver</li>
  //           <li>Year: 2019</li>
  //           <li>Horsepower: 95</li>
  //           <li>Engine: 999</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td rowspan="2" class="cell__model">Q5</td>
  //       <td>
  //         <ul>
  //           <li>Version: FY 2021</li>
  //           <li>Year: 2021</li>
  //           <li>Horsepower: 299</li>
  //           <li>Engine: 1984</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td>
  //         <ul>
  //           <li>Version: Sportback</li>
  //           <li>Year: 2021</li>
  //           <li>Horsepower: 299</li>
  //           <li>Engine: 1984</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td rowspan="2" class="cell__model">TT</td>
  //       <td>
  //         <ul>
  //           <li>Version: Coupe</li>
  //           <li>Year: 2021</li>
  //           <li>Horsepower: 197</li>
  //           <li>Engine: 1984</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td>
  //         <ul>
  //           <li>Version: Roadster</li>
  //           <li>Year: 2021</li>
  //           <li>Horsepower: 197</li>
  //           <li>Engine: 1984</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr class="row__brand">
  //       <td colspan="2">BMW</td>
  //     </tr>
  //     <tr>
  //       <td rowspan="2" class="cell__model">8 series</td>
  //       <td>
  //         <ul>
  //           <li>Version: G1X LCI</li>
  //           <li>Year: 2022</li>
  //           <li>Horsepower: 333</li>
  //           <li>Engine: 2998</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td>
  //         <ul>
  //           <li>Version: G1X</li>
  //           <li>Year: 2019</li>
  //           <li>Horsepower: 340</li>
  //           <li>Engine: 2998</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td rowspan="2" class="cell__model">X6</td>
  //       <td>
  //         <ul>
  //           <li>Version: G06 LCI</li>
  //           <li>Year: 2023</li>
  //           <li>Horsepower: 530</li>
  //           <li>Engine: 4395</li>
  //         </ul>
  //       </td>
  //     </tr>
  //     <tr>
  //       <td>
  //         <ul>
  //           <li>Version: G06</li>
  //           <li>Year: 2020</li>
  //           <li>Horsepower: 286</li>
  //           <li>Engine: 2993</li>
  //         </ul>
  //       </td>
  //     </tr>
  //   </tbody>
  // </table>
}


  
   
  