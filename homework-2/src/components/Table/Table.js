import React, { Component } from "react";

const ESelected = {
  All: 'All selected',
  Half: "Half are selected",
  LessThanHalf: "Less than Half are selected"
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [
        { type: `turtle`, icon: `🐢`, selected: false },
        { type: `octopus`, icon: `🐙`, selected: false },
        { type: `fish`, icon: `🐠`, selected: false },
        { type: `flamingo`, icon: `🦩`, selected: false },
        { type: `penguin`, icon: `🐧`, selected: false },
      ],
    };
  }
  

  resetSelectedState = () => {
    this.setState((prevState) => {
      const updatedAnimals = prevState.animals.map((animal) => ({
        ...animal,
        selected: false,
      }));

      return { animals: updatedAnimals };
    });
  };

  updateSelectedState = (index) => {
    this.setState((prevState) => {
      const updatedAnimals = [...prevState.animals]; // Create a copy of the array
      updatedAnimals[index] = { ...updatedAnimals[index], selected: true }; // Update the selected property

      return { animals: updatedAnimals }; // Update the state with the new array
    });
  };

  randomNumber(){
    return Math.floor(
        Math.random() * this.state.animals.length
      );
  }

  performActionIfHalfSelected = () => {
    const { animals } = this.state;
    const threshold = Math.ceil(animals.length / 2);

   if (this.state.animals.every((animal) => animal.selected)) {
     console.log("ALL animals are selected!");
     clearTimeout(this.timeoutId);
     return ESelected.All;
    } else if (animals.filter((animal) => animal.selected).length >= threshold) {
      console.log("At least half of the animals are selected!");
      return ESelected.Half
    } else {
      console.log("There is not half selected item");
      return ESelected.LessThanHalf;
    }
  };

  componentDidMount() {
    this.timeoutId = setInterval(() => {
      let randomNumber = this.randomNumber();

      do {
        if (this.state.animals.every((animal) => animal.selected)){
          break;
        }

        randomNumber = this.randomNumber();
        console.log(randomNumber);
      } while (this.state.animals[randomNumber].selected === true);
      
      this.updateSelectedState(randomNumber);
      
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <>
        <div
          className="px-4 sm:px-6 lg:px-8 mx-auto"
          style={{ maxWidth: "1200px" }}
        >
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className={`table min-w-full divide-y divide-gray-300 ${this.performActionIfHalfSelected() === ESelected.All ? "active-all" : this.performActionIfHalfSelected() === ESelected.Half ? "active-half" : ""}`}>
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Icon
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {this.state.animals.map((animal, item) => (
                        <tr
                          key={item}
                          className={animal.selected === true ? "selected" : ""}
                        >
                          <td
                            className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6`}
                            style={{width: "100%"}}
                          >
                            {animal.type}
                          </td>
                          <td
                            className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500`}
                          >
                            {animal.icon}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Table;
