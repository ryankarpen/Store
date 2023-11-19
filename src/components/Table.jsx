import React from 'react'
import './Table.css'

const Table = ({props}) => {


  return (
    <div className='table-container'>
        {props.name === "WHEY PROTEIN" && 
            <table>
                <tr>
                    <th>Quantidade por porção</th>
                </tr>
                <tr>
                    <th>Valor Energético</th>
                    <td>{props.nutritionalTable.valorEnergetico}</td>
                </tr>
                <tr>
                    <th>Porção</th>
                    <td>{props.nutritionalTable.porção}</td>
                </tr>
                <tr>
                    <th>Carboidratos</th>
                    <td>{props.nutritionalTable.carboidratos}</td>
                </tr>
                <tr>
                    <th>Açúcares</th>
                    <td>{props.nutritionalTable.açucares}</td>
                </tr>
                <tr>
                    <th>Proteínas</th>
                    <td>{props.nutritionalTable.proteinas}</td>
                </tr>
                <tr>
                    <th>Creatina</th>
                    <td>{props.nutritionalTable.creatina}</td>
                </tr>
            </table>
        }
         {props.name === "CREATINA" && 
            <table>
                <tr>
                    <th>Quantidade por porção</th>
                </tr>
                <tr>
                    <th>Valor Energético</th>
                    <td>{props.nutritionalTable.valorEnergetico}</td>
                </tr>
                <tr>
                    <th>Porção</th>
                    <td>{props.nutritionalTable.porção}</td>
                </tr>
                <tr>
                    <th>Carboidratos</th>
                    <td>{props.nutritionalTable.carboidratos}</td>
                </tr>
                <tr>
                    <th>Açúcares</th>
                    <td>{props.nutritionalTable.açucares}</td>
                </tr>
                <tr>
                    <th>Proteínas</th>
                    <td>{props.nutritionalTable.proteinas}</td>
                </tr>
                <tr>
                    <th>Creatina</th>
                    <td>{props.nutritionalTable.creatina}</td>
                </tr>
            </table>
        }
         {props.name === "BCAA" && 
            <table>
                <tr>
                    <th>Quantidade por porção</th>
                </tr>
                <tr>
                    <th>Valor Energético</th>
                    <td>{props.nutritionalTable.valorEnergetico}</td>
                </tr>
                <tr>
                    <th>Vitamina B6</th>
                    <td>{props.nutritionalTable.vitaminaB6}</td>
                </tr>
                <tr>
                    <th>Leucina</th>
                    <td>{props.nutritionalTable.leucina}</td>
                </tr>
                <tr>
                    <th>Isoleucina</th>
                    <td>{props.nutritionalTable.isoleucina}</td>
                </tr>
                <tr>
                    <th>Valina</th>
                    <td>{props.nutritionalTable.valina}</td>
                </tr>
            </table>
        }
         {props.name === "GLUTAMINA" && 
            <table>
                <tr>
                    <th>Quantidade por porção</th>
                </tr>
                <tr>
                    <th>Valor Energético</th>
                    <td>{props.nutritionalTable.valorEnergetico}</td>
                </tr>
                <tr>
                    <th>Carboidratos</th>
                    <td>{props.nutritionalTable.carboidratos}</td>
                </tr>
                <tr>
                    <th>Açúcares</th>
                    <td>{props.nutritionalTable.açucares}</td>
                </tr>
                <tr>
                    <th>Proteínas</th>
                    <td>{props.nutritionalTable.proteinas}</td>
                </tr>
                <tr>
                    <th>Glutamina</th>
                    <td>{props.nutritionalTable.glutamina}</td>
                </tr>
            </table>
        }
         {props.name === "HIPERCALÓRICO" && 
            <table>
                <tr>
                    <th>Quantidade por porção</th>
                </tr>
                <tr>
                    <th>Valor Energético</th>
                    <td>{props.nutritionalTable.valorEnergetico}</td>
                </tr>
                <tr>
                    <th>Porção</th>
                    <td>{props.nutritionalTable.porção}</td>
                </tr>
                <tr>
                    <th>Carboidratos</th>
                    <td>{props.nutritionalTable.carboidratos}</td>
                </tr>
                <tr>
                    <th>Açúcares</th>
                    <td>{props.nutritionalTable.açucares}</td>
                </tr>
                <tr>
                    <th>Proteínas</th>
                    <td>{props.nutritionalTable.proteinas}</td>
                </tr>
                <tr>
                    <th>Creatina</th>
                    <td>{props.nutritionalTable.creatina}</td>
                </tr>
            </table>
        }
        {props.name === "PRÉ TREINO" && 
            <table>
                <tr>
                    <th>Quantidade por porção</th>
                </tr>
                <tr>
                    <th>Valor Energético</th>
                    <td>{props.nutritionalTable.valorEnergetico}</td>
                </tr>
                <tr>
                    <th>Carboidratos</th>
                    <td>{props.nutritionalTable.carboidratos}</td>
                </tr>
                <tr>
                    <th>Beta-alanina</th>
                    <td>{props.nutritionalTable.betaAlanina}</td>
                </tr>
                <tr>
                    <th>Tirosina</th>
                    <td>{props.nutritionalTable.tirosina}</td>
                </tr>
                <tr>
                    <th>Arginina</th>
                    <td>{props.nutritionalTable.arginina}</td>
                </tr>
                <tr>
                    <th>Taurina</th>
                    <td>{props.nutritionalTable.taurina}</td>
                </tr>
            </table>
        }
    </div>
  )
}

export default Table