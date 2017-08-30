import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import { incrementCounter, resetCounter } from '../../actions/index'

import { Store } from "../../reducers/index"

import "./counter.less";

type ConnectedState = {
	counter: { value: number }
}

type ConnectedDispatch = {
	increment: (n: number) => void, 
	reset: () => void
}

const mapStateToProps = (state: Store.All): ConnectedState => ({
	counter: state.counter,
})

const mapDispatchToProps = (dispatch: redux.Dispatch<Store.All>): ConnectedDispatch => ({
	increment: (n: number): void => {
		dispatch(incrementCounter(n))
	},
	reset: (): void => {
		dispatch(resetCounter())
	}
})


interface CounterState {
	count: number;
}

class CounterComponent extends React.Component<ConnectedState & ConnectedDispatch, {}>{

	constructor(props) {
		super(props);
	}

	onClick = () => {
		this.props.increment(10);
	}

	onReset = () => {
		this.props.reset();
	}

	public render(): JSX.Element {

		const { counter } = this.props; 

		return (
			<div className="counter-position">
				<div className="custom-label">{"Counter: " + counter.value}</div>
				<div className={"custom-button increase"} onClick={this.onClick}>{"Add"}</div>
				<div className={"custom-button reset"} onClick={this.onReset}>{"Reset"}</div>
			</div>
		);
	}
}

export const Counter: React.ComponentClass<{}> = connect(mapStateToProps, mapDispatchToProps)(CounterComponent)