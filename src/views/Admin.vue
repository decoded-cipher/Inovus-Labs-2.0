<template>
    <div class="admin">


        <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <!-- sidebar-brand  -->
                    <div class="sidebar-item sidebar-brand">
                        <a href="#">Inovus Labs IEDC</a>
                    </div>
                    <!-- sidebar-header  -->
                    <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                        <div class="user-pic">
                            <img class="img-responsive img-rounded" src="img/user.png" alt="User picture">
                        </div>
                        <div class="user-info">
                            <span class="user-name"><strong>Super Admin Panel</strong></span>
                            <!-- <span class="user-role">Administrator</span> -->
                            <span class="user-role">{{email}}</span>
                            <span class="user-status">
                                <i class="fa fa-circle"></i>
                                <span>Online</span>
                            </span>
                        </div>
                    </div>
                    <!-- sidebar-search  -->
                    <div class="sidebar-item sidebar-search">
                        <div>
                            <div class="input-group">
                                <input type="text" class="form-control search-menu" placeholder="Search...">
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- sidebar-menu  -->
                    <div class=" sidebar-item sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>Menu</span>
                            </li>
                            <li>
                                <router-link to="/admin/overview">
                                    <i class="fa fa-chart-line"></i>
                                    <span class="menu-text">Overview</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/profile">
                                    <i class="fa fa-user"></i>
                                    <span class="menu-text">Profiles</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/admin/iot">
                                    <i class="fa fa-wrench"></i>
                                    <span class="menu-text">IoT</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="#" @click="logout()">
                                    <i class="fa fa-power-off"></i>
                                    <span class="menu-text">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- sidebar-menu  -->
                </div>
                <!-- sidebar-footer  -->
                
            </nav>

            <!-- page-content  -->
            <main class="page-content mt-5">
                <router-view />
            </main>
            <!-- page-content" -->
        </div>


    </div>
</template>

<script>
    import {fb} from '../firebase'

    export default {
        name: 'Admin',
        components: {
        },
        data() {
            return{
                name: null,
                 email: null
            }
        },
        methods: {
            logout() {
                fb.auth().signOut()
                .then(() => {
                    this.$router.replace('/')
                    Toast.fire({
                        icon: 'success',
                        title: 'Logged Out Successfully'
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        },
        created() {
            var user = fb.auth().currentUser;
            this.email = user.email;
        }
    };
</script>