import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table.min.css';


export default class HighScore extends Component {
	render() {
		return (
			<div className="">	
				<BootstrapTable data={ this.props.results }>
					<TableHeaderColumn dataField='id' isKey={ true } hidden>Id</TableHeaderColumn>
					<TableHeaderColumn dataField='name'>Nimi</TableHeaderColumn>
					<TableHeaderColumn dataField='result'>Tulos</TableHeaderColumn>
				</BootstrapTable>
			</div>
		);
	}
}
