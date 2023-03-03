import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import item_list from '../Headers/ItemList';

const styles = {
    thead: {
        backgroundColor: 'skyblue',
    },
    td: {
        padding: '10px',
        border: 'solid 1px black',
    },
};

export default function ListSingleItem({ route, navigate }) {
    const location = useLocation();
    const [option, setOption] = useState(location.state.id);

    return (
        <>
            {item_list
                .filter((item) => item.index === option)
                .map((filteredItem) => {
                    if (filteredItem['nutrition-per-100g']) {
                        console.log('Checking.. ');

                        return (
                            <>
                                {console.log(filteredItem)}
                                <tbody key={filteredItem.index}>
                                    <tr style={styles.thead}>
                                        <th className="px-3">ID</th>
                                        <th className="px-2">Index</th>
                                        <th className="px-2">Name</th>
                                        <th className="px-2">
                                            Nutrition-per-100g
                                        </th>
                                        <th className="px-2">More Info</th>
                                    </tr>
                                    <tr key={filteredItem.index}>
                                        <td style={styles.td}>
                                            {filteredItem.index}
                                        </td>
                                        <td style={styles.td}>
                                            {filteredItem.id}
                                        </td>
                                        <td style={styles.td}>
                                            {filteredItem.name}
                                        </td>

                                        <td style={styles.td}>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]?.energy
                                                    ? 'Energy: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].energy
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]?.protein
                                                    ? 'Protein: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].protein
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].fat
                                                    ? 'Fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].fat
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['saturated-fat']
                                                    ? 'Saturated-fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['saturated-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].fat
                                                    ? 'Carbohydrate: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].carbohydrate
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].sugars
                                                    ? 'Sugars: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].sugars
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['dietary-fibre']
                                                    ? 'Dietary-fibre: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['dietary-fibre']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['trans-fat']
                                                    ? 'Trans-fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['trans-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].sodium
                                                    ? 'Sodium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].sodium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].potassium
                                                    ? 'Pottassium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].potassium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['polyunsaturated-fat']
                                                    ? 'Polyunsaturated-fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['polyunsaturated-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['monounsaturated-fat']
                                                    ? 'Monounsaturated-fatt: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['monounsaturated-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].calcium
                                                    ? 'Calcium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].calcium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].iron
                                                    ? 'Iron: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].iron
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].magnesium
                                                    ? 'Magnesium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].magnesium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].phosphorus
                                                    ? 'Phosphorus: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].phosphorus
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].manganese
                                                    ? 'Manganese: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].manganese
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ].zinc
                                                    ? 'Zinc: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ].zinc
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-a']
                                                    ? 'Vitamin-A: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-a']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-b1']
                                                    ? 'Vitamin-B1: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-b1']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-b2']
                                                    ? 'Vitamin-B2: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-b2']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-b3']
                                                    ? 'Vitamin-B3: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-b3']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-b4']
                                                    ? 'Vitamin-B4: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-b4']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-b5']
                                                    ? 'Vitamin-B5: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-b5']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-b6']
                                                    ? 'Vitamin-B6: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-b6']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-b9']
                                                    ? 'Vitamin-B9: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-b9']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-c']
                                                    ? 'Vitamin-C: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-c']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-e']
                                                    ? 'Vitamin-E: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-e']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100g'
                                                ]['vitamin-k']
                                                    ? 'Vitamin-K: ' +
                                                      filteredItem[
                                                          'nutrition-per-100g'
                                                      ]['vitamin-k']
                                                    : null}
                                            </div>
                                        </td>

                                        <td style={styles.td}>
                                            <div>
                                                {filteredItem.tags[0]
                                                    ? filteredItem.tags[0]
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem.tags[1]
                                                    ? filteredItem.tags[1]
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem.tags[2]
                                                    ? filteredItem.tags[2]
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem.tags[3]
                                                    ? filteredItem.tags[3]
                                                    : null}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        );
                    } else if (filteredItem['nutrition-per-100ml']) {
                        return (
                            <>
                                {console.log(filteredItem)}
                                <tbody key={filteredItem.index}>
                                    <tr style={styles.thead}>
                                        <th className="px-3">ID</th>
                                        <th className="px-2">Index</th>
                                        <th className="px-2">Name</th>
                                        <th className="px-2">
                                            Nutrition-per-100ml
                                        </th>
                                        <th className="px-2">More Info</th>
                                    </tr>
                                    <tr key={filteredItem.index}>
                                        <td style={styles.td}>
                                            {filteredItem.index}
                                        </td>
                                        <td style={styles.td}>
                                            {filteredItem.id}
                                        </td>
                                        <td style={styles.td}>
                                            {filteredItem.name}
                                        </td>

                                        <td style={styles.td}>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]?.energy
                                                    ? 'Energy: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].energy
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]?.protein
                                                    ? 'Protein: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].protein
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].fat
                                                    ? 'Fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].fat
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['saturated-fat']
                                                    ? 'Saturated-fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['saturated-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].fat
                                                    ? 'Carbohydrate: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].carbohydrate
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].sugars
                                                    ? 'Sugars: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].sugars
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['dietary-fibre']
                                                    ? 'Dietary-fibre: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['dietary-fibre']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['trans-fat']
                                                    ? 'Trans-fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['trans-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].sodium
                                                    ? 'Sodium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].sodium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].potassium
                                                    ? 'Pottassium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].potassium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['polyunsaturated-fat']
                                                    ? 'Polyunsaturated-fat: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['polyunsaturated-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['monounsaturated-fat']
                                                    ? 'Monounsaturated-fatt: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['monounsaturated-fat']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].calcium
                                                    ? 'Calcium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].calcium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].iron
                                                    ? 'Iron: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].iron
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].magnesium
                                                    ? 'Magnesium: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].magnesium
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].phosphorus
                                                    ? 'Phosphorus: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].phosphorus
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].manganese
                                                    ? 'Manganese: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].manganese
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ].zinc
                                                    ? 'Zinc: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ].zinc
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-a']
                                                    ? 'Vitamin-A: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-a']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-b1']
                                                    ? 'Vitamin-B1: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-b1']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-b2']
                                                    ? 'Vitamin-B2: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-b2']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-b3']
                                                    ? 'Vitamin-B3: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-b3']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-b4']
                                                    ? 'Vitamin-B4: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-b4']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-b5']
                                                    ? 'Vitamin-B5: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-b5']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-b6']
                                                    ? 'Vitamin-B6: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-b6']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-b9']
                                                    ? 'Vitamin-B9: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-b9']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-c']
                                                    ? 'Vitamin-C: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-c']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-e']
                                                    ? 'Vitamin-E: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-e']
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem[
                                                    'nutrition-per-100ml'
                                                ]['vitamin-k']
                                                    ? 'Vitamin-K: ' +
                                                      filteredItem[
                                                          'nutrition-per-100ml'
                                                      ]['vitamin-k']
                                                    : null}
                                            </div>
                                        </td>

                                        <td style={styles.td}>
                                            <div>
                                                {filteredItem.tags[0]
                                                    ? filteredItem.tags[0]
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem.tags[1]
                                                    ? filteredItem.tags[1]
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem.tags[2]
                                                    ? filteredItem.tags[2]
                                                    : null}
                                            </div>
                                            <div>
                                                {filteredItem.tags[3]
                                                    ? filteredItem.tags[3]
                                                    : null}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        );
                    }
                })}
            <br></br>
            <br></br>
            <select
                className="bg-red-400"
                onChange={(e) => {
                    const passValue = parseInt(e.target.value);
                    //setOption(passValue);
                    console.log('inSingle Item : ', passValue);
                    setOption(passValue);
                }}
                defaultValue="default"
            >
                <option value="default">Choose an option</option>
                {item_list
                    ? item_list.map((item) => {
                          return (
                              <option key={item.id} value={item.index}>
                                  {item.name}
                              </option>
                          );
                      })
                    : null}
            </select>
        </>
    );
}
