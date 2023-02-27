KUBECONFIG := $(HOME)/.kube/config
KUBE_NAMESPACE := my-app

KUBE_DEPLOYMENT_BACKEND := my-app-backend-deployment
KUBE_DEPLOYMENT_FRONTEND := my-app-frontend-deployment

KUBE_SERVICE_BACKEND := my-app-backend-service
KUBE_SERVICE_FRONTEND := my-app-frontend-service

.PHONY: deploy delete delete-services delete-deployments

deploy: deploy-mongodb deploy-pv deploy-backend deploy-frontend

delete: delete-backend delete-frontend delete-mongodb delete-pv delete-services delete-deployments

deploy-backend:
	cd backend && make deploy

deploy-frontend:
	cd frontend && make deploy

deploy-mongodb:
	kubectl apply -f kubernetes/mongodb/pod.yaml -n $(KUBE_NAMESPACE)
	kubectl apply -f kubernetes/mongodb/service.yaml -n $(KUBE_NAMESPACE)

deploy-pv:
	kubectl apply -f kubernetes/persistent-volume/pv.yaml -n $(KUBE_NAMESPACE)
	kubectl apply -f kubernetes/persistent-volume/pvc.yaml -n $(KUBE_NAMESPACE)

delete-backend:
	cd backend && make delete

delete-frontend:
	cd frontend && make delete

delete-mongodb:
	kubectl delete -f kubernetes/mongodb/service.yaml -n $(KUBE_NAMESPACE)
	kubectl delete -f kubernetes/mongodb/pod.yaml -n $(KUBE_NAMESPACE)

delete-pv:
	kubectl delete -f kubernetes/persistent-volume/pvc.yaml -n $(KUBE_NAMESPACE)
	kubectl delete -f kubernetes/persistent-volume/pv.yaml -n $(KUBE_NAMESPACE)

delete-services:
	kubectl delete services $(KUBE_SERVICE_BACKEND) $(KUBE_SERVICE_FRONTEND) -n $(KUBE_NAMESPACE)

delete-deployments:
	kubectl delete deployments $(KUBE_DEPLOYMENT_BACKEND) $(KUBE_DEPLOYMENT_FRONTEND) -n $(KUBE_NAMESPACE)
