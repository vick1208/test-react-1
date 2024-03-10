import { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

    }
    render() {
        return (
            <div className='flex items-center'>
                <h1 className='mr-6'>{this.state.count}</h1>
                <button className='bg-zinc-600 text-white p-3' onClick={
                    () => this.setState({
                        count: this.state.count + 1,
                    })
                }>+</button>
            </div>
        )
    }
}
