import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
    const [empleado, setEmpleado] = useState([]);

    useEffect(() => {
        consumirApi();
    }, [])

    async function consumirApi() {
        const response = await fetch('api/empleado/obtener-empleados', {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            setEmpleado(data);
        }
    }

    return (
        <div className="container-fluid">
            <h5>Lista de empleados</h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleado.map(item => (
                            <tr key={item.idEmpleado}>
                                <td>{item.nombre}</td>
                                <td>{item.correo}</td>
                                <td>{item.direccion}</td>
                                <td>{item.telefono}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;