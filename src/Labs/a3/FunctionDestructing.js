function FunctionDestructing() {
    const add = (a, b) => a + b;
    const sum = add(1, 2);
    const subtract = ({ a, b }) => a - b;
    const difference = subtract({ a: 4, b: 2 });
    return (
        <div>
            <h3>Function Destructing</h3>
            const add = (a, b) =&gt; a + b;<br />
            const sum = add(1, 2);<br />
            const subtract = (&#123; a, b &#125;) =&gt; a - b;<br />
            const difference = subtract(&#123; a: 4, b: 2 &#125;);<br/>
            sum = {sum}<br />
            difference = {difference}<br />
            <br />
        </div>
    );
}
export default FunctionDestructing;