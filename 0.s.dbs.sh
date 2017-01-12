###### Sub functions ######
function _prt_msg() {
    clrText='\033[32m'
    clrEND='\033[0m'
    echo -e $clrText$1$clrEND 
}
function _scr_msg() {
    printf "\e]1337;SetBadgeFormat=%s\a" $(echo -n "$1" | base64)
}

function _is_running() {
    if test $( pgrep -f $1 | wc -l ) -eq 0 
    then 
        # 没有该进程
        retval=0
    else 
        # 已存在该进程
        retval=1
    fi 
    return "$retval"
}

###### Nginx ######
# _scr_msg "1.Nginx MySql Redis Mongo"

_is_running 'nginx'
retval=$?
if [ $retval == 1 ]
then
    _prt_msg 'Killing Nginx ... \c'
    sudo pkill -9 nginx 
    _prt_msg 'OK \n'
fi
sleep 5 
_prt_msg 'Starting Nginx ... \c'
sudo nginx 
sleep 2 
_prt_msg "OK\n"

###### MySql ######
_is_running 'mysqld'
retval=$?
if [ $retval == 1 ]
then
    _prt_msg 'Stoping mysqld ... \c'
    mysql.server stop 
    _prt_msg 'OK\n'
fi
_prt_msg 'Starting MySql ...\c'
mysql.server start  
_prt_msg "OK \n"

###### Redis ######
_is_running 'redis-server'
retval=$?
if [ $retval == 1 ]
then
    _prt_msg 'Stoping redis-server ... \c'
    redis-cli -h 127.0.0.1 -p 6379 shutdown
    _prt_msg 'OK\n'
fi
_prt_msg 'Starting Redis ...\c'
redis-server /usr/local/etc/redis.conf & 
_prt_msg "OK \n"

###### MongoD ######
_is_running 'mongod'
retval=$?
if [ $retval == 1 ]
then
    _prt_msg 'Stoping mongod ... \c'
    mongo < command.mongo
    _prt_msg 'OK\n'
fi
_prt_msg 'Starting Mongo ...\c'
sudo mongod &
sleep 2 
_prt_msg "OK \n"
