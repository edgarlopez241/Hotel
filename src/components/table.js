import { Component } from "react";
import React from 'react';
import MaterialTable from 'material-table';
//import { DatePicker, message, Alert } from 'antd';

class LaTabla extends Component {
    render() {
      return (
        
        <MaterialTable
        title="Habitaciones Disponibles"
        columns={[

          { title: 'Comida', field: 'name', customSort:(a,b) =>a.name.length - b.name.length},
          { title: 'Jugo', field: 'surname' },
          { title: 'Precio', field: 'birthYear', type: 'numeric' },
          {
            title: 'Disponiblidad',
            field: 'birthCity',
            lookup: { 1: 'Disponible', 2: 'Agotado'},
            
          },
        ]}
        data={[
          { name: 'Empandas', surname: 'Parchita', birthYear: 350000, birthCity: 1 },
          { name: 'Pollo a la canasta', surname: 'Daikiri', birthYear: 450000, birthCity: 2 },
          { name: 'Club House', surname: 'Caipirina Brasieira', birthYear: 400000, birthCity: 1 },
        ]}        
        options={{
          sorting: true,
          
        }}
      />    )
    }
  }

export default LaTabla;