## Delete the second to last element

The (play)list is not an array. It is a linked list.
So each elemet has the reference to the next list, which means you can only go though the list by starting at the root.

Problem:
- You need to delete the second to last element in the list
- You can only go once through the list
- You need to solve this with a contant amount of memory

Example List:
`[1, 2, 3, 4, 5]`

Delete with `i = 2`

to get `[1, 2, 3, 5]`


Todo:
-[] Create a class with a simple node that repesents one track in the playlist
-[] Create a class which repesents the root of the playlist
	-[] Add a function to add Elements to the end of the list
	-[] Add a function to output the whole list
	-[] Add a function to evaluate the second to last element
	-[] Add a function which deletes the second to last element, by transfering the reference of the next element to the previous.
