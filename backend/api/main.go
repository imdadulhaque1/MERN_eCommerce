package main

import (
	"fmt"
	"math"
)

// func main() {
// 	sum:=1
// 	for ; sum<10;{
// 		sum+=sum
// 	}
// 	fmt.Println(sum)
// }

func sqrt(x float64) string {
	if x<0{
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func main() {
	fmt.Println(sqrt(2), sqrt(-4))
}

