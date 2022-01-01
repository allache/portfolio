import React  from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Profile = () => {
    return (
        <div class="profile_skills">
        <div class="container">portfolio
        <div className="row">
        <div className="col-sm-12">
            <div class="profile">
           
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <ul class="profile-list">
                    <li class="profile-item">
                        <span>Name</span>
                        Allache Abdelmalek
                    </li>
                    <li class="profile-item">
                        <span>Birthday</span>
                        15/09/1991
                    </li>
                    <li class="profile-item">
                        <span>Address</span>
                        kolea , algerie
                    </li>
                    <li class="profile-item">
                        <span>Phone</span>
                        05 53 18 80 59   </li>
                    <li class="profile-item">
                        <span>Email</span>
                        allacheabdelmalek@gmail.com
                    </li>
                 
                </ul>
            </div>
            
            <div class="skills">
                <h2 class="skills-title">Some <span>skills</span></h2>
                <p class="skills-desc">
                no limits to what i can learn I'am a open source human
                </p>
                <div class="bar">
                    <span class="title">javascript</span>
                    <span class="perc">50%</span>
                    <div class="parent">
                        <span class="sp1"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">python</span>
                    <span class="perc">20%</span>
                    <div class="parent">
                        <span class="sp2"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">Delphi</span>
                    <span class="perc">80%</span>
                    <div class="parent">
                        <span class="sp3"></span>
                    </div>
                </div>
                <div class="bar">
                    <span class="title">html/css</span>
                    <span class="perc">70%</span>
                    <div class="parent">
                        <span class="sp4"></span>
                    </div>
                </div>
                <div class="bar">
                    <span class="title">React js</span>
                    <span class="perc">40%</span>
                    <div class="parent">
                        <span class="sp5"></span>
                    </div>
                </div>
                <div class="bar">
                    <span class="title">JavaEE</span>
                    <span class="perc">75%</span>
                    <div class="parent">
                        <span class="sp6"></span>
                    </div>
                </div>

                <div class="bar">
                    <span class="title">Nodejs</span>
                    <span class="perc">40%</span>
                    <div class="parent">
                        <span class="sp7"></span>
                    </div>
                </div>
                <div class="bar">
                <span class="title">php laravel</span>
                <span class="perc">10%</span>
                <div class="parent">
                    <span class="sp8"></span>
                </div>
            </div>


            </div>
            
        </div>
        </div>
        </div>
        
    </div>
    )
}

export default Profile;
