package main

import (
	"fmt"
	"net/http"
)

func main() {

	fs := http.FileServer(http.Dir("./assets"))
	http.Handle("/assets/", http.StripPrefix("/assets/", fs))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})

	fmt.Println("Server Started on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
