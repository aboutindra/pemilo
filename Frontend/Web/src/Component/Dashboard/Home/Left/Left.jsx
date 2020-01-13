import React from "react";
import './../../../../Resource/App.css'

export default function HomeLeft() {
    return(
        <div className="col-12">
            <div className="user-card">
                <div className="user-picture"><img src="#"/> </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-6">
                                <p className="user-bio-title">
                                    Nama Admin
                                </p>
                            </div>
                            <div className="col-6">
                                <p className="user-bio-desc">
                                    {/*{ AdminName }*/}
                                    Muhammad Indrawan
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <p className="user-bio-title">
                                    Asal Sekolah
                                </p>
                            </div>
                            <div className="col-6">
                                <p className="user-bio-desc">
                                    {/*{ School }*/}
                                    SMK Negeri 5 Kota Bekasi
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <p className="user-bio-title">
                                    Balance
                                </p>
                            </div>
                            <div className="col-6">
                                <p className="user-bio-desc">
                                    {/*{ Balance }*/}
                                    Rp. 120.000,00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <p className="user-bio-title">
                                Current Event
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="user-bio-desc">
                                {/*{CurrentEvent}*/}
                                1
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}