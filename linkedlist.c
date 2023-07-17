#include <stdio.h>
#include <stdlib.h>
struct Node
{
	/* data */
	int data;
	struct Node* left;
	struct Node* right;
};
struct Node* create(int data){
	struct Node* node=(struct Node *)malloc(sizeof(struct Node));
	node->data=data;
	node->left=NULL;
	node->right=NULL;
	return node;
}
struct Node* insertion( struct Node* head, int data){
	if(head==NULL){
		return create(data);
	}
		if(head->data>data){
			head->right=insertion(head->right,data);
		}	
		else{
			head->left=insertion(head->left,data);
		}	
}