import React, { Component } from "react";
import axios from "axios";
import { Modal, } from "antd";
import "antd/dist/antd.css";
import styled from 'styled-components'


const Title = styled.h2`
  margin-top: 20px;
  color:white;
  font-size:3vw
`
const ButtonTambah = styled.button
    `
  background: #7f8c8d;
  border-radius: 7px;
  border: none;
  color: white;
  margin:15px;
  font-size:17px;
  &:hover {
    border:solid 2px #03bfcb;
    cursor: pointer;
    
  }
`

export default class Pulsa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pulsa: [],
            visible: false,
            name: "",
            saldo: "",
            harga: "",
            bonus: "",

        };
    }

    handleButtonDelete = (id) => {
        axios({
            method: "delete",
            url: "https://cors-anywhere.herokuapp.com/https://pulsaproara.herokuapp.com/api/pulsa/" + id,
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                alert("berhasil apus");
                window.location.reload();
            })
            .catch((error) => {
                alert("gagal lur");
            });
    };
    handleButtonUpdate = (_id) => {
        console.log(_id)
        this.setState({
            visiblea: true,
        });
    };
    handleTambahPulsa = () => {
        this.setState({
            visible: true,
        });
    };
    handleName = (e) => {
        this.setState({
            name: e.target.value,
        });
        console.log(this.state.name);
    };
    handleSaldo = (e) => {
        this.setState({
            saldo: e.target.value,
        });
        console.log(this.state.saldo);
    };
    handleHarga = (e) => {
        this.setState({
            harga: e.target.value,
        });
        console.log(this.state.harga);
    };
    handleBonus = (e) => {
        this.setState({
            bonus: e.target.value,
        });
        console.log(this.state.bonus);
    };
    handleSubmit = () => {
        if (
            this.state.name !== "" &&
            this.state.saldo !== "" &&
            this.state.harga !== "" &&
            this.state.bonus !== ""
        ) {
            axios({
                method: "post",
                url: "https://cors-anywhere.herokuapp.com/https://pulsaproara.herokuapp.com/api/pulsa",
                headers: {
                    accept: "*/*",
                },
                data: {
                    name: this.state.name,
                    saldo: this.state.saldo,
                    harga: this.state.harga,
                    bonus: this.state.bonus,
                },
            })
                .then((data) => {
                    alert("berhasil menambahkan");
                    window.location.reload();
                })
                .catch((error) => {
                    alert("gagal lur");
                });
        } else {
            alert("pastikan semua kolom terisi");
        }
    };
    handleSubmitUpdate = (_id) => {
            alert("Belum berhasil gan, buat tugas akhir aja ntar ")
            // axios({
            //     method: "put",
            //     url: "https://api.allorigins.win/get?callback=myFunc&url=https://pulsaproara.herokuapp.com/api/pulsa/"+_id,
            //     headers: {
            //         accept: "*/*",
            //     },
            //     data: {
            //         name: this.state.name,
            //         saldo: this.state.saldo,
            //         harga: this.state.harga,
            //         bonus: this.state.bonus,
            //     },
            // })
            //     .then((data) => {
            //         alert("berhasil update");
            //         window.location.reload();
            //     })
            //     .catch((error) => {
            //         alert("gagal lur");
            //     });
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "https://cors-anywhere.herokuapp.com/https://pulsaproara.herokuapp.com/api/pulsa",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    pulsa: data.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <Title>DATABASE PULSA - PRO</Title>
                    </center>
                    <center>
                        <ButtonTambah onClick={this.handleTambahPulsa}>Tambah Pulsa</ButtonTambah>
                    </center>
                    <Modal
                        title="Tambah Data Pulsa"
                        centered
                        visible={this.state.visible}
                        onOk={this.handleSubmit}
                        onCancel={() => this.setState({ visible: false })}
                        width={500}
                    >
                        <div style={{ textAlign: "center" }}>
                            <p>Operator : </p>{" "}
                            <input
                                type="text"
                                placeholder="nama operator"
                                onChange={this.handleName}
                            />
                            <br />
                            <p>Saldo : </p>{" "}
                            <input
                                type="text"
                                placeholder="Saldo"
                                onChange={this.handleSaldo} />
                            <br />
                            <p>Harga : </p>{" "}
                            <input
                                type="text"
                                placeholder="Harga"
                                onChange={this.handleHarga}
                            />
                            <p>Bonus : </p>{" "}
                            <input
                                type="text"
                                placeholder="Bonus"
                                onChange={this.handleBonus}
                            />
                            <br />
                        </div>
                    </Modal>
                    {this.state.pulsa.map((results, index) => {
                        return (
                            <div className="card bg-dark text-white" key={results._id}>
                                <div className="card-body">
                                    <h5 className="card-title text-white">Nama Operator : {results.name}</h5>
                                    <h6 className="card-text text-white">Saldo : {results.saldo}</h6>
                                    <h6 className="card-text text-white">Harga : Rp. {results.harga},-</h6>
                                    <p className="card-text">Bonus : {results.bonus}</p>
                                </div>
                                <button className="button bg-danger" onClick={() => this.handleButtonDelete(results._id)}>
                                    {" "}
                                        Hapus Pulsa
                                    </button>
                                <button className="button bg-warning" onClick={() => this.handleButtonUpdate(results._id) && this.handleSubmitUpdate(results._id)} >
                                    {" "}
                                        Update Pulsa
                                    </button>
                                <Modal
                                    title="Update Data Pulsa"
                                    centered
                                    visible={this.state.visiblea}
                                    onOk={this.handleSubmitUpdate}
                                    onCancel={() => this.setState({ visiblea: false })}
                                    width={500}
                                >
                                    <div style={{ textAlign: "center" }}>
                                        <p>Operator :{} </p>{" "}
                                        <input
                                            type="text"
                                            placeholder="nama operator"
                                            onChange={this.handleName}
                                        />
                                        <br />
                                        <p>Saldo : </p>{" "}
                                        <input
                                            type="text"
                                            placeholder="Saldo"
                                            onChange={this.handleSaldo} />
                                        <br />
                                        <p>Harga : </p>{" "}
                                        <input
                                            type="text"
                                            placeholder="Harga"
                                            onChange={this.handleHarga}
                                        />
                                        <p>Bonus : </p>{" "}
                                        <input
                                            type="text"
                                            placeholder="Bonus"
                                            onChange={this.handleBonus}
                                        />
                                        <br />
                                    </div>
                                </Modal>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}