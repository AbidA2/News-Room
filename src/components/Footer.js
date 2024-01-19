import React from 'react'
import Button from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Sign up for daily articles
            </p>
            <p className='footer-subscription-text'>
                Not finding what your looking for? feel free to unsubscribe.
            </p>
            <form>
                <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subcribe</Button>
            </form>
        </section>
        <div className='footer-links'>
        <div className='footer-link-wrapper'>
         <div className='footer-link-item'>
            <h2>About</h2>
            <Link to='/about us'>Learn about Us</Link>
            </div> 
            <div className='footer-link-item'>
            <h2>Merch</h2>
            <Link to='/merch'>Check out our shop</Link>
            </div>  
            <div className='footer-link-item'>
            <h2>Articles</h2>
            <Link to='/articles'>Keep up with the news</Link>
            </div>    
        </div>
        </div>
        <section className="social-media">
            <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to="/" className='social-logo'>
                   <i class="fa-solid fa-camera"></i>  News Room 
                </Link>
                </div> 
            <small className='website-rights'>News Room © 2024</small> 
             <div className='social-icons'>
                <Link className='social-icon-link facebook'
                to="/"
                target="_blank"
                aria-label='Facebook'
                >
                 <i className='fab fa-facebook-f'></i>   
                </Link>
                <Link className='social-icon-link instagram'
                to="/"
                target="_blank"
                aria-label='Instagram'
                >
                 <i className='fab fa-instagram'></i>   
                </Link>
                <Link className='social-icon-link youtube'
                to="/"
                target="_blank"
                aria-label='Youtube'
                >
                 <i className='fab fa-youtube'></i>   
                </Link>
                <Link className='social-icon-link twitter'
                to="/"
                target="_blank"
                aria-label='Twitter'
                >
                 <i className='fab fa-twitter'></i>   
                </Link>
                <Link className='social-icon-link linkedin'
                to="/"
                target="_blank"
                aria-label='LinkedIn'
                >
                 <i className='fab fa-linkedin'></i>   
                </Link>
             </div>
            </div>
        </section>
    </div>
  )
}

export default Footer