import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



function Dashboard() {

    const [rowData, setRowData] = useState({ Marque: "", Modele: "", Prix: "" });

    const [rowDatas, setRowDatas] = useState([]);

    const gridRef = useRef();

    const inputChanged = (event) => {
        setRowData({ ...rowData, [event.target.name]: event.target.value })
    };

    const addCar = (event) => {
        setRowDatas([...rowDatas, rowData]);
    };

    const deleteCar = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setRowDatas(rowDatas.filter((rowData, index) =>
                index !== gridRef.current.getSelectedNodes()[0].childIndex));
        } else {
            alert("Selectioner une ligne!");
        }
    };

    const column = [
        { headerName: "Marque", field: "marque" },
        { headerName: "Modele", field: "modele" },
        { headerName: "Prix", field: "prix" },
    ];

    return (
        <div>
            <input type="text" onChange={inputChanged} placeholder="Marque" name="Marque" value={rowData.Marque} />
            <input type="text" onChange={inputChanged} placeholder="Modele" name="Modele" value={rowData.Modele} />
            <input type="number" onChange={inputChanged} placeholder="Prix" name="Prix" value={rowData.Prix} />
            <button onClick={addCar}>Ajouter</button>
            <button onClick={deleteCar}>Supprimer</button>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                <AgGridReact
                    rowData={rowDatas}
                    rowSelection='multiple'
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    animateRows='true'
                    columnDefs={column}>
                </AgGridReact>
            </div>
        </div>
    )
}


export default Dashboard;