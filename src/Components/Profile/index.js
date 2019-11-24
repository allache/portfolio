import React  from 'react';
import './style.css'
const Profile = () => {
    return (
        <div class="profile_skills">
        <div class="container">
            <div class="profile">
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <ul class="profile-list">
                    <li class="profile-item">
                        <span>Name</span>
                        Klalib Sohaib
                    </li>
                    <li class="profile-item">
                        <span>Birthday</span>
                        15/02/1993
                    </li>
                    <li class="profile-item">
                        <span>Address</span>
                        Blida , algerie
                    </li>
                    <li class="profile-item">
                        <span>Phone</span>
                        06 72 25 36 79
                    </li>
                    <li class="profile-item">
                        <span>Email</span>
                        siyahasohaib22@gmail.com
                    </li>
                    <li class="profile-item">
                        <span>Website</span>
                        <span class="web">www.google.com</span>
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
                    <span class="perc">100%</span>
                    <div class="parent">
                        <span class="sp1"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">python</span>
                    <span class="perc">90%</span>
                    <div class="parent">
                        <span class="sp2"></span>
                    </div>
                </div>
                
                <div class="bar">
                    <span class="title">odoo 12</span>
                    <span class="perc">80%</span>
                    <div class="parent">
                        <span class="sp3"></span>
                    </div>
                </div>
                <div class="bar">
                    <span class="title">html/css</span>
                    <span class="perc">100%</span>
                    <div class="parent">
                        <span class="sp1"></span>
                    </div>
                </div>
                <div class="bar">
                    <span class="title">React js</span>
                    <span class="perc">80%</span>
                    <div class="parent">
                        <span class="sp3"></span>
                    </div>
                </div>
                <div class="bar">
                    <span class="title">flutter</span>
                    <span class="perc">80%</span>
                    <div class="parent">
                        <span class="sp3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Profile;
