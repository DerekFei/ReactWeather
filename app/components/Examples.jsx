var React = require('react');
var {Link} = require('react-router');
var Examples = (props)=>{
  return(
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <link to='/?location=Toronto'>Toronto, ON</link>
        </li>
        <li>
          <link to='/?location=Waterloo'>Waterloo, ON</link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
