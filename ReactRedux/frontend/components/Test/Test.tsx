import * as React from "react";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./test.less";

export class Test extends React.Component<{}, {items: any}> {
	
	constructor(props) {
		super(props);

		this.state = {
			items: ['Item 1...', 'Item 2...', 'Item 3...', 'Item 4...']
		}

		this.handleAdd = this.handleAdd.bind(this);

		this.handleRemove = this.handleRemove.bind(this);
	};

	handleAdd() {
		var newItems = this.state.items;
		newItems = newItems.concat([prompt('Create New Item')]);
		this.setState({ items: newItems });
	}

	handleRemove(event) {
		var newItems = this.state.items;//.slice();
		newItems.splice(Number(event.target.id), 1);
		this.setState({ items: newItems });
	}

	render() {

		const items = this.state.items.map((name, i) => (<div onClick={this.handleRemove} id={i.toString()} key={i}># {name}</div>));

		return (
			<div>
				<button onClick={this.handleAdd}>Add Item</button>
				<ReactCSSTransitionGroup
					transitionAppear={true}
					transitionLeave={true}
					transitionEnter={true}
					transitionName="example">
						{items}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}
