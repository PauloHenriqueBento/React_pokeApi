import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import Navbar from "../components/Navbar";
import { Skeletons } from "../components/Skeletons";

export const Home = () => {

    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        var endpoints = []
        for (var i = 1; i < 200; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then(res => setPokemons(res))
    }

    const pokemonFilter = (name) => {
        var filteredPokemons = []
        if (name === "")
            getPokemons()
        for (var i in pokemons) {
            if (pokemons[i].name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        // console.log(filteredPokemons)
        setPokemons(filteredPokemons);
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? (
                        <Skeletons />
                    ) : (
                        pokemons.map((pokemon, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                                    <PokemonCard
                                        name={ pokemon.data.name }
                                        id={pokemon.data.id}
                                        types = { pokemon.data.types }
                                    />
                                </Grid>
                            )
                        })   
                    )}
                </Grid>
            </Container>
        </div>
    )
}