import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../'

export class HighScore extends Component {
	render() {
		return (
			<div>	
				<BootstrapTable data={ this.props.results }>
					<TableHeaderColumn dataField='id' isKey={ true } hidden>Id</TableHeaderColumn>
					<TableHeaderColumn dataField='name'>Nimi</TableHeaderColumn>
					<TableHeaderColumn dataField='price'>Tulos</TableHeaderColumn>
				</BootstrapTable>
			</div>
		);
	}
}
