import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware.js';
import { getMyNotifications, markNotificationRead, markAllNotificationsRead } from '../controllers/notifications.controller.js';

const router = Router();

router.get('/', authenticateToken, getMyNotifications);
router.post('/read-all', authenticateToken, markAllNotificationsRead);
router.patch('/:id/read', authenticateToken, markNotificationRead);

export default router;
