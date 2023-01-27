import sys
import pickle
import traceback

try:
    loaded_model = pickle.load(open("logistic1", 'rb'))
    arg1=int(sys.argv[1])
    arg2=int(sys.argv[2])
    arg3=float(sys.argv[3])


    result = loaded_model.predict([[arg1,arg2,arg3]])
    print(result[0])
except Exception as e: print(e)




