import * as React from "react";

import "./download.less";

export default class Download extends React.Component<{}, {}>{

	private interval: any;
	private indicators = 0;

	componentDidMount() {
		this.interval = setInterval(this.updateIndicators, 500);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updateIndicators = () => {
		this.indicators = this.indicators < 10 ? ++this.indicators : 0;
		this.forceUpdate();
	}

	calculateIndicators() {
		let indicators = "⏳"
		for (let i = 0; i < this.indicators; i++) {
			indicators = indicators.concat("⏳");
		}
		return indicators;
	}

	public render(): JSX.Element {
		return <div className={'indicators-position'}>{this.calculateIndicators()}</div>
	}
}