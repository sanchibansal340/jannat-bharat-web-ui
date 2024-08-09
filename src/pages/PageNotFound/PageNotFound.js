import React from 'react'
import lifeSaverTube from '../../assets/life-saver-tube2.png'
import './PageNotFound.css'

function PageNotFound() {
    return (
        <div className="page-not-found">
            <section>
                <h2>OOPS</h2>
                <h1>
                    4
                    <img class="img-404" src={lifeSaverTube} />4
                </h1>
                <h2>Page Lost in Sea</h2>

                <div class="air air1"></div>
                <div class="air air2"></div>
                <div class="air air3"></div>
                <div class="air air4"></div>
            </section>
        </div>
    )
}

export default PageNotFound
